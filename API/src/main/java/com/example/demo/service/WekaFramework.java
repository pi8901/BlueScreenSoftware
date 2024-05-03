package com.example.demo.service;

import weka.associations.Apriori;
import weka.associations.AssociationRule;
import weka.classifiers.rules.ZeroR;
import weka.clusterers.SimpleKMeans;
import weka.core.Instances;
import weka.core.converters.ArffLoader;
import weka.core.converters.ArffSaver;
import weka.core.converters.CSVLoader;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.NumericCleaner;
import weka.filters.unsupervised.attribute.NumericToNominal;
import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.api.model.absolute;

@Service
public class WekaFramework {
    /**
     * ermittelt die angegebene Anzahl der Cluster
     *
     * @param daten  alleDaten, nurKunden, nurWaren - je nach Analyse
     * @param number Anzahl der Cluster, die ermittelt werden sollen
     * @return Die einzelnen Cluster in einem String, getrennt durch \n
     * @throws Exception Fehlerbehandlung muss noch erledigt werden
     */
    String findCluster(Instances daten, int number) throws Exception {
        String[] result;

        SimpleKMeans model = new SimpleKMeans();
        model.setNumClusters(number);

        model.buildClusterer(daten);

        // Final cluster centroids holen
        result = model.getClusterCentroids().toString().split("@data\n");
        return (result[1] + "\n");
    }

    // Hilfsmethode, um fuer die Auswertung unnoetige Angaben rauszuloeschen
    private String clearAprioriList(String oneRule) {
        String temp = "";

        // Weka-blabla raus loeschen
        for (int i = 0; i < oneRule.length(); i++) {
            Character a = oneRule.charAt(i);
            if ((Character.isLetter(a)) || (a == ',')) {
                temp = temp + a;
            }
        }
        return temp;
    }

    /**
     * Ermittelt aus den Kundendaten die Warengruppen, die haeufig zusammen gekauft
     * werden Die Regeln werden ueber den Apriori-Algorithmus ermittelt
     *
     * @param daten nurWaren - fuer die Analyse, der zusammen gekauften Waren <br>
     *              je nach Analyse auch alleDaten oder nurKunden als daten
     * @return Waren, die zusammen gekauft werden, als Stringarray, dessen Dimension
     *         sich aus der Anzahl der gefundenen Regeln ergibt
     * @throws Exception Fehlerbehandlung muss noch erledigt werden
     */
    public String[] makeApriori(Instances daten) throws Exception {

        // umwandeln in gekauft / nicht gekauft (0/1)
        NumericCleaner nc = new NumericCleaner();
        nc.setMaxThreshold(1.0); // Schwellwert auf 1 setzen
        nc.setMaxDefault(1.0); // alles ueber Schwellwert durch 1 ersetzen
        nc.setInputFormat(daten);
        daten = Filter.useFilter(daten, nc); // Filter anwenden.

        // Die Daten als nominale und nicht als numerische Daten setzen
        NumericToNominal num2nom = new NumericToNominal();
        num2nom.setAttributeIndices("first-last");
        num2nom.setInputFormat(daten);
        daten = Filter.useFilter(daten, num2nom);

        Apriori model = new Apriori();
        model.buildAssociations(daten);

        List<AssociationRule> rulesA = model.getAssociationRules().getRules();
        int anzRules = rulesA.size();

        String[] tmp = new String[anzRules];

        // Ergebnis huebsch zusammensetzen
        for (int i = 0; i < anzRules; i++) {
            tmp[i] = clearAprioriList(rulesA.get(i).getPremise().toString()) + " ==> "
                    + clearAprioriList(rulesA.get(i).getConsequence().toString());
        }
        return tmp;
    }

    /**
     * liefert den haeufigsten Wert eines Attributs zurueck benutzt ZeroR, eine
     * Wekafunktion fuer das haeufigste Element der nominalen Attribute, bei
     * numerischen Werten wird der Mittelwert geliefert!
     *
     * @param daten Hier wichtig: Daten im <b>arffFormat!</b>
     *
     * @param index - Fuer welches Attribut soll das Maximum bestimmt werden (0..9
     *              hier sinnvoll, da nur diese Daten nominal sind)
     * @return haeufigstes Element als String
     * @throws Exception Fehlerbehandlung muss noch erledigt werden
     */
    String findMaximum(Instances daten, int index) throws Exception {
        String[] max;

        ZeroR za = new ZeroR(); // wekafunktion

        daten.setClass(daten.attribute(index)); // Attribut dessen Maximum
        // ermittelt werden soll
        za.buildClassifier(daten);

        max = za.toString().split(": "); // weka -blabla wegnehmen

        return (max[1]);
    }

    /**
     * Verteilung der einzelnen Attribute Kundendaten und Einkaufsverhalten, als
     * <b>absolute</b> Werte
     *
     * @param daten - alleDaten
     * @param index - welches Attribut soll ausgewertet werden?
     * @return Verteilung des Attributs
     */
    public absolute attDistributionAbsolute(Instances daten) 
    {
        int attCount;
        int[][] abs = new int[9][9];

        for(int j = 0; j <= 8; j++)
        {
            // Anzahl der moeglichen Werte
            attCount = daten.attributeStats(j).distinctCount;
            for (int i = 0; i < attCount; i++) 
            {
                abs[j][i] = daten.attributeStats(j).nominalCounts[i];
            }
        }
        return new absolute(abs);
    }

    String path;
    String roh;
    String arffDat;
    public Instances alleDaten;
    public Instances nurWaren;
    Instances nurKunden;
    Instances arffDaten;

public WekaFramework() throws Exception
{
        path = "API//src//main//resources//static//";
        roh = path + "kd100.csv";
        arffDat = path + "kd100.arff";

        // CSV-Datei laden
        CSVLoader loader = new CSVLoader();
        loader.setSource(new File(roh));
        alleDaten = loader.getDataSet();

        // 0 durch ? ersetzen, um fuer die Auswertung nur die Waren zu
        // beruecksichtigen, die gekauft wurden
        NumericCleaner nc = new NumericCleaner();
        nc.setMinThreshold(1.0); // Schwellwert auf 1 setzen
        nc.setMinDefault(Double.NaN); // alles unter 1 durch ? ersetzen
        nc.setInputFormat(alleDaten);
        alleDaten = Filter.useFilter(alleDaten, nc); // Filter anwenden

        /*
         * ARFF - Format der Daten fuer Weka erzeugen Das ist zwar komisch (erst
         * speichern und dann wieder einlesen), geht sicher auch anders. Drueber
         * nachdenken .. irgendwann ;-)
         */
        // als ARFF speichern
        ArffSaver saver = new ArffSaver();
        saver.setInstances(alleDaten);
        saver.setFile(new File(arffDat));
        saver.writeBatch();

        // Arff-Datei laden
        ArffLoader aLoader = new ArffLoader();
        aLoader.setSource(new File(arffDat));
        arffDaten = aLoader.getDataSet();
}
}

import corporation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class company {
    public static void main(String[] args) {
        Corporation k = new Corporation();

        String[] types = new String[270];
        String[] names = new String[270];

        String opName = "Vasya";
        String mName = "Petya";
        String tmName = "Misha";

        for (int i = 0; i < 270; i++) {
            if (i < 180) {
                types[i] = "O";
                names[i] = opName + " " + (i + 1);
            } else if (i < 260) {
                types[i] = "M";
                names[i] = mName + " " + (i + 1);
            } else {
                types[i] = "TM";
                names[i] = tmName + " " + (i + 1);
            }
        }
        k.hireAll(names, types);

        System.out.println("THE TOP SALARY №1");
        k.printWorkers(k.getTopSalaryStaff(15));
        System.out.println("\n");

        System.out.println("THE LOW SALARY №1");
        k.printWorkers(k.getLowestSalaryStaff(30));
        System.out.println("\n");

        System.out.println("Corp.income is: " + k.getIncome());

        for (int i = 0; i < 135; i++) {
            k.fire(i);
        }

        System.out.println("Corp.income is: " + k.getIncome());

        System.out.println("THE TOP SALARY №2");
        k.printWorkers(k.getTopSalaryStaff(15));
        System.out.println("\n");

        System.out.println("THE LOW SALARY №2");
        k.printWorkers(k.getLowestSalaryStaff(30));
        System.out.println("\n");

    }
}

import com.sun.jdi.StringReference;

import java.util.Arrays;

public class Arrays51 {
    public static void main(String[] args){
        String text = "Каждый охотник желает знать где сидит фазан";
        String[] colors = text.split(",?\\s+");

        for(String x: colors)
            System.out.print(x + " ");
        System.out.println();

        rotate1(colors);
        rotate2(colors);

        for(String x: colors)
            System.out.print(x + " ");
        System.out.println();
    }

    public static void rotate1(String[] colors){
        for(int i = colors.length - 1; i >= 0; i --)
            System.out.print(colors[i] + " ");
            System.out.println();
    }

    public static void rotate2(String[] colors){
        String temp = "";
        int colorsLength = colors.length;
        for(int i = 0; i < colorsLength/2; i ++){
            temp = colors[i];
            colors[i] = colors[colorsLength - 1 - i];
            colors[colorsLength - 1 - i] = temp;
        }
    }

}

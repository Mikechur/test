import java.util.Arrays;

public class TemperaturePatients {
    public static void main(String[] args){
        double[] array = new double[30];
        int average = 0;
        int sum = 0;
        int healthPatCount = 0;
        double temperature = 0;
        for(int i = 0; i < 30; i++){
            temperature = 32 + Math.random() * 8;
            array[i] = temperature;
            sum += array[i];

            if(array[i] >= 36.2 && array[i] <= 36.9)
                healthPatCount ++;
        }
        average = sum / 30;

        System.out.println("Средняя температура по больнице = " + average);
        System.out.println("Количество здоровых пациентов в больнице = " + healthPatCount);
        System.out.println(Arrays.toString(array));
    }
}

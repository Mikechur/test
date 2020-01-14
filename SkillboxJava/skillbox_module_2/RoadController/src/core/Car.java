package core;

public class Car
{
    private String number; // переменная типа String
    private int height; // переменная типа int
    private double weight; // переменная типа double
    private boolean hasVehicle; // // переменная типа boolean
    private boolean isSpecial; // переменная типа isSpecial

    public String toString()
    {
        String special = isSpecial ? "СПЕЦТРАНСПОРТ " : "";
        return "\n=========================================\n" +
            special + "Автомобиль с номером " + number +
            ":\n\tВысота: " + height + " мм\n\tМасса: " + weight + " кг";
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getNumber() {
        return number;
    }

    public double getWeight() {
        return weight;
    }

    public int getHeight() {
        return height;
    }

    public void setHasVehicle(boolean hasVehicle) {
        this.hasVehicle = hasVehicle;
    }

    public boolean getHasVehicle(){
        return this.isSpecial;
    }

    public void setSpecial(boolean special) {
        isSpecial = special;
    }

    public boolean getSpecial(){
        return this.isSpecial;
    }
}
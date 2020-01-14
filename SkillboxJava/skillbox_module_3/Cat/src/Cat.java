
public class Cat {
    public static final int EYES_COUNT = 2; // количество глаз
    public static final double MIN_WEIGHT = 1000.0; // минимальный и максимальный вес
    public static final double MAX_WEIGHT = 9090.0;

    private double originWeight;
    private double weight;

    private static int count = 0;
    private ColorType color;
    private double feedWeight = 0; // init feedWeight

    private String name;

    public Cat(double weight, String name){
        this();
        this.weight = weight;
        this.name = name;
    }

    public Cat() {
        count++;
        weight = 1500.0 + 3000.0 * Math.random();
        originWeight = weight;

    }

    public Cat(double weight) {
        this.weight = weight;
    }

    public static int getCount() {
        return count;
    }

    public double getFeedWeight() { // return feedWeight
        return feedWeight;
    }

    public double setFeedWeight(double feedWeight){
        return this.feedWeight = feedWeight;
    }

    public void meow() {
        weight = weight - 1;
        System.out.println("Meow");
    }

    public void goToTheToilet() {
        if(isWeightNormal()) {
            weight = weight - 100;
            if(isWeightNormal()) {
                System.out.println("I feel myself much better");
            }else {
                System.out.println("Died after toilet");
                count--;
            }
        }else System.out.println("The cat is dead");
    }

    public double getOriginWeight(){
        return this.originWeight;
    }

    public void setOriginWeight(double originWeight){
        this.originWeight = originWeight;
    }

    public void feed(Double amount) // new variable feedWeight
    {
        // проверка веса до кормления
        if(isWeightNormal()) {
        weight = weight + amount;
        feedWeight += amount;
        // проверка веса после кормления
        if(!isWeightNormal()) count--;
        }
        else System.out.println("The cat is dead, it can't eat.");
    }

    public void drink(Double amount) {
        // проверка веса до кормления
        if(isWeightNormal()){
        weight = weight + amount;
        // проверка веса после кормления
        if(!isWeightNormal()) count--;
        }
        else System.out.println("The cat is dead, it can't drink.");
    }

    public Double getWeight() {
        return this.weight;
    }


    public String getStatus() {
        if (weight < MIN_WEIGHT) {
            return "Dead";
        } else if (weight > MAX_WEIGHT) {
            return "Exploded";
        } else if (weight > originWeight) {
            return "Sleeping";
        } else {
            return "Playing";
        }
    }

    public void setColorType(ColorType color) {
        this.color = color;
    }

    public ColorType getColorType() {
        if(this.color != null)
        return this.color;
        else return ColorType.BLACK_COLOR;
    }

    public Cat copy(){
        Cat copy = new Cat(this.weight,this.name);
        copy.setColorType(this.getColorType());
        copy.setFeedWeight(this.feedWeight);
        copy.setOriginWeight(this.getOriginWeight());
        return copy;
    }

    public boolean isWeightNormal(){
        return (getWeight() > MIN_WEIGHT && getWeight() < MAX_WEIGHT);
    }

    @Override
    public String toString(){
        return "{\n"+ "weight:"+this.weight +"\n"
                +"color:"+this.color+"\n"
                +"originWeight:"+this.originWeight+"\n"
                +"feedWeight:" + this.feedWeight +"\n"
                +"name:"+this.name+"\n" + "}";
    }
}
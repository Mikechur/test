public class Cycles {
    public static void main(String[] args){
    // Uncomment one of this methods calls.

    Cycles cycle1 = new Cycles();
        cycle1.whileCycle();

        Cycles cycle2 = new Cycles();
//        cycle2.forCycle();
    }
    public void whileCycle(){
        int i = 200000;
        while( i <= 235000){
            System.out.println(i);
            i = i == 210000 ? i = 220000-1 : i;
            i++;
        }
    }
    public void forCycle(){
        for(int i = 200000; i <= 235000; i++){
            System.out.println("Номер билета: "+ i);
            i = i == 210000 ? i = 220000-1 : i;
        }
    }
}

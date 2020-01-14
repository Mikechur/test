public class Conteiner {
    private static int conteinerNumber = 0;
    public static final int BOX_MAX_AMOUNT = 27;
//    private int boxAmount = 0;

    Conteiner(){
        conteinerNumber++;
    }
    public int getConteinerNumber(){
        return conteinerNumber;
    }

//    public int getBoxAmount(){
//        return boxAmount;
//    }
//    public void setBoxAmount(int boxAmount){
//        this.boxAmount = boxAmount;
//    }
}

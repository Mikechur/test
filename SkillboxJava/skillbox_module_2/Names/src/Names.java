public class Names {
    public static void main(String[] args){
//        int vasyaAge = 25;
//        int katyaAge = 22;
//        int mishaAge = 35;

        int vasyaAge = 40;
        int katyaAge = 70;
        int mishaAge = 100;

        int min = -1;
        int middle = -1;
        int max = -1;

        if(vasyaAge > katyaAge) {
            if (katyaAge > mishaAge) {
                max = vasyaAge;
                min = mishaAge;
                middle = katyaAge;
            } else if(vasyaAge > mishaAge){
                middle = mishaAge;
                min = katyaAge;
                max = vasyaAge;
            } else{
                max = mishaAge;
                middle = vasyaAge;
                min = katyaAge;
            }
        } else if (katyaAge < mishaAge) {
            max = mishaAge;
            min = vasyaAge;
            middle = katyaAge;
        } else if(vasyaAge < mishaAge){
            middle = mishaAge;
            max = katyaAge;
            min = vasyaAge;
        } else{
            min = mishaAge;
            middle = vasyaAge;
            max = katyaAge;
        }

        System.out.println("Max age: " + max +"\n" + "Middle age: " + middle +"\n" + "Min age: " + min);
    }
}

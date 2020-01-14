public class LatinChars {
    public static void main(String[] args){
        String latinAlphabetHighCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String latinAlphabetLowCase = latinAlphabetHighCase.toLowerCase();

        for(int i = 0; i < latinAlphabetHighCase.length(); i++){
            char symbolHigh = latinAlphabetHighCase.charAt(i);
            char symbolLow = latinAlphabetLowCase.charAt(i);

            int codeHighSymbol = (int) symbolHigh;
            int codeLowSymbol = (int) symbolLow;

            System.out.println(symbolLow + "(" + codeLowSymbol + ")" + "  " + symbolHigh + "(" + codeHighSymbol + ")" );
        }

        for(int i = 91; i < 97; i++)
        System.out.println(Character.toChars(i));

    }
}

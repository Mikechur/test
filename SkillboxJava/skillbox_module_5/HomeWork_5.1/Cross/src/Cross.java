public class Cross {
    public static void main(String[] args){
        int n = 7;
        String[][] array = new String[n][n];
        for(int i = 0; i < n; i ++){
            for(int j = 0; j < n; j++){
                if(i == j || j == n - i - 1) array[i][j] = "x";
                else
                    array[i][j] = " ";
                System.out.print(array[i][j]);
            }
            System.out.println();
        }
    }
}

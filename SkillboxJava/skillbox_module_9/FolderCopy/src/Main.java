import java.io.File;
import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String pathSource;
        String pathDest;
        for (; ; ) {
            System.out.println("Введите путь к копируюемой папке");
            pathSource = scanner.nextLine();
            if (!new File(pathSource).isDirectory()) {
                System.out.println("Указанный путь не является путем к папке");
                continue;
            }
            System.out.println("Введите путь к папке, в которую нужно скопировать");
            pathDest = scanner.nextLine();
            while(!new File(pathDest).isDirectory()) {
                System.out.println("Указанный путь не является путем к папке");
                pathDest = scanner.nextLine();
            }
            try {
                FolderCpy.copyFile(new File(pathSource),new File(pathDest));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}

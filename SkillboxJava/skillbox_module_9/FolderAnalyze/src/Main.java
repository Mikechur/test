import java.io.File;
import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        String pathToFolder;

        for (; ; ) {
            System.out.println("Input folder-path");
            pathToFolder = scanner.nextLine();
            File folderFile = new File(pathToFolder);
            if (!folderFile.isDirectory()) {
                System.out.println("This is not a folder-path. Input a real folder-path");
                continue;
            }
            int n = Folder.sizeOfFolder(folderFile);
            if (n < Folder.BYTE_IN_KILOBYTE) {
                System.out.println(n + " B");
            } else if (n < Folder.BYTE_IN_MEGABYTE) {
                System.out.println(Folder.byte_to_kilobyte(n));
            } else if (n < Folder.BYTE_IN_GIGABYTE) {
                System.out.println(Folder.byte_to_megabyte(n));
            } else {
                System.out.println(Folder.byte_to_gigabyte(n));
            }
        }
    }
}

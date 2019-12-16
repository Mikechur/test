import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
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
            Folder.sizeOfFolder(folderFile);
        }
    }
}

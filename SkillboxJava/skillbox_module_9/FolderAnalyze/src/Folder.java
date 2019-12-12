import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Scanner;

public class Folder {
    static File folder;
    public final static int BYTE_IN_MEGABYTE = 1048576;
    public final static int BYTE_IN_GIGABYTE = 1073741824;
    public final static int BYTE_IN_KILOBYTE = 1024;

    public static void main(String[] args) {
        String path = "C:/Users/Misha/Desktop/info.txt";
        String pathTextFile = "data/info.txt";
        File textfile = new File(pathTextFile);

        Scanner scanner = new Scanner(System.in);

        String pathToFolder;

        for (; ; ) {
            System.out.println("Input folder-path");
            pathToFolder = scanner.nextLine();
            folder = new File(pathToFolder);
            if (!folder.isDirectory()) {
                System.out.println("This is not a folder-path. Input a real folder-path");
                continue;
            }
            int n = sizeOfFolder(folder);
            if (n < BYTE_IN_KILOBYTE) {
                System.out.println(n + " B");
            } else if (n >= BYTE_IN_KILOBYTE && n < BYTE_IN_MEGABYTE) {
                System.out.println(byte_to_kilobyte(n));
            } else if (n >= BYTE_IN_MEGABYTE && n < BYTE_IN_GIGABYTE) {
                System.out.println(byte_to_megabyte(n));
            } else if (n >= BYTE_IN_GIGABYTE) {
                System.out.println(byte_to_gigabyte(n));
            }
        }
    }

    public static int sizeOfFolder(File folder) {

        int lengthOfFolder = 0;
        File[] folderContent = folder.listFiles();

        for (File file : folderContent) {
            if (file.isDirectory()) {
                lengthOfFolder += sizeOfFolder(file);
            } else {
                lengthOfFolder += file.length();
            }
        }
        return lengthOfFolder;
    }

    public static String byte_to_kilobyte(int byteCount) {
        double kb = (double) byteCount / BYTE_IN_KILOBYTE;
        return String.format("%.2f KB", kb);
    }

    public static String byte_to_megabyte(int byteCount) {
        double mb = (double) byteCount / BYTE_IN_MEGABYTE;
        return String.format("%.2f MB", mb);
    }

    public static String byte_to_gigabyte(int byteCount) {
        double gb = (double) byteCount / BYTE_IN_GIGABYTE;
        return String.format("%.2f GB", gb);
    }


}
//        for (File file : filesInFolder) {
//            System.out.println(file.getAbsolutePath());
//        }

//        try {
//            FileInputStream file = new FileInputStream(pathTextFile);
////            Files file = new Files(Bu)
//            for(;;){
//                byte[] codeOfChar = file.readAllBytes();
////                if(codeOfChar < 0) {
////                    break;
////                }
//                char character = (char) codeOfChar;
//                stringBuilder.append(character);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
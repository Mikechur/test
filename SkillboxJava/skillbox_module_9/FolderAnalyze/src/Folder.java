import java.io.File;
import java.util.Scanner;

public class Folder {
    static File folder;
    public final static int BYTE_IN_MEGABYTE = 1048576;
    public final static int BYTE_IN_GIGABYTE = 1073741824;
    public final static int BYTE_IN_KILOBYTE = 1024;

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

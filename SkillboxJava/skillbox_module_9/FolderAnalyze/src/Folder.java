import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Folder {
    public final static int BYTE_IN_MEGABYTE = 1048576;
    public final static int BYTE_IN_GIGABYTE = 1073741824;
    public final static int BYTE_IN_KILOBYTE = 1024;

    public static void sizeOfFolder(File folder) throws IOException {
        Files.walk(folder.toPath())
                .map(Path::toFile)
                .filter(File::isFile)
                .mapToLong(File::length)
                .reduce(Long::sum)
                .ifPresent(Folder::getHumanReadableSize);
    }

    public static String getHumanReadableSize(long size) {
        if (size < Folder.BYTE_IN_KILOBYTE) {
            return size + " B";
        } else if (size < Folder.BYTE_IN_MEGABYTE) {
            return String.format("%.2f KB", (double) size / BYTE_IN_KILOBYTE);
        } else if (size < Folder.BYTE_IN_GIGABYTE) {
            return String.format("%.2f MB", (double) size / BYTE_IN_MEGABYTE);
        } else {
            return String.format("%.2f GB", (double) size / BYTE_IN_GIGABYTE);
        }
    }
}

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.OptionalLong;

public class Folder {
    public final static int BYTE_IN_MEGABYTE = 1048576;
    public final static int BYTE_IN_GIGABYTE = 1073741824;
    public final static int BYTE_IN_KILOBYTE = 1024;

    public static void sizeOfFolder(File folder) throws IOException {
        OptionalLong k = Files.walk(folder.toPath()).map(Path::toFile).filter(File::isFile)
                .mapToLong(File::length).reduce(Long::sum);
        k.ifPresent(x -> System.out.println(count_data(k)));
    }

    public static String count_data(OptionalLong data) {
        Long result = data.getAsLong();
        if (result < Folder.BYTE_IN_KILOBYTE) {
            return result + " B";
        } else if (result < Folder.BYTE_IN_MEGABYTE) {
            return String.format("%.2f KB", (double) result / BYTE_IN_KILOBYTE);
        } else if (result < Folder.BYTE_IN_GIGABYTE) {
            return String.format("%.2f MB", (double) result / BYTE_IN_MEGABYTE);
        } else {
            return String.format("%.2f GB", (double) result / BYTE_IN_GIGABYTE);
        }
    }
}

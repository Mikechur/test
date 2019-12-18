import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FolderCpy {

    public static void copyFile(File sourceFile, File receiverDir) throws IOException {
        Path pathBase = sourceFile.toPath();
        String baseFolder = sourceFile.getName();
        Files.walk(sourceFile.toPath())
                .map(Path::toFile)
                .map(File::toPath)
                .forEach(x -> {
                    try {
                        Path pathRelative = pathBase.relativize(x);
                        Path newCopyPath = Paths.get(receiverDir.getAbsolutePath()
                                + File.separator + baseFolder + File.separator + pathRelative);
                        if (!(x.toFile().isDirectory() && newCopyPath.toFile().exists())) {
                            Files.copy(x, newCopyPath, StandardCopyOption.REPLACE_EXISTING);
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });
    }
}

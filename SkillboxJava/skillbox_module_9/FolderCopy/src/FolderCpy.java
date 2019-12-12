import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FolderCpy {
    public static void main(String[] args) throws IOException, InterruptedException {

        String path1 = "C:/Users/Misha/Desktop/Language's of WEB";
        String path2 = "C:/Users/Misha/Desktop/A";
        String path3 = "C:/Users/Misha/Desktop/C.txt";

        File fileTest = new File(path3);

        File fileSourc = new File(path1);
        File fileReceiv = new File(path2);

        System.out.println(fileTest.exists());
        Files.deleteIfExists(fileTest.toPath());

//        Thread.sleep(1);

        System.out.println(fileTest.exists());

//
        try {
            copyFile(fileSourc, fileReceiv);
        } catch (Exception e) {
            System.out.println("Oh my, i cant copy this shit");
        }
    }

    public static void copyFile(File sourceFile, File receiverDir) throws IOException {
        Path pathSource = Paths.get(sourceFile.getAbsolutePath());
        Path pathReceiver = Paths.get(receiverDir.getAbsolutePath());
        System.out.println("ERROR IS HERE1");
        String newFilePath = receiverDir.getAbsolutePath()
                + File.separator + pathSource.getFileName();
        System.out.println("ERROR IS HERE2");
        if(Files.exists(Paths.get(newFilePath)))
        Files.delete(Paths.get(newFilePath));
        System.out.println("ERROR IS HERE3");
        System.out.println("Copy WHAT - " + pathSource.toString()+"\n" +
                "COPY INTO - " + newFilePath);
        System.out.println("ERROR IS HERE4");
        Path copiedFile = Files.copy(pathSource, Paths.get(newFilePath), StandardCopyOption.REPLACE_EXISTING);

        if (sourceFile.isDirectory()) {
            File inner = new File(newFilePath);
            for (File file : sourceFile.listFiles()) {
                copyFile(file, inner);
            }
        }
    }

}

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

public class HtmlParse {
    public static void copyImgFromHtml(String pathToHtml, String copyPath){
        String htmlFile = parseFile(pathToHtml);
        // data/lentaru.html
        Document doc = Jsoup.parse(htmlFile);
        Elements elements = doc.select("img");

        elements.forEach(element -> {
            String src = element.attr("src");
            // src contains relative path from folder which containes htlm-file
            File file = new File(pathToHtml);
            // thats why we have to add html-page path to images-path
            String imagePath = file.getParentFile().getAbsolutePath() + File.separator + src;
            File file2 = new File(imagePath);

            try {
                if(file2.isFile())
                copyFile(file2, Paths.get(copyPath).toFile());
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

    }

    public static String parseFile(String path) {
        StringBuilder builder = new StringBuilder();
        try {
            List<String> lines = Files.readAllLines(Paths.get(path));
            lines.forEach(line -> builder.append(line + "\n"));

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return builder.toString();
    }

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

import org.apache.commons.io.FileUtils;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;
import java.net.URL;

public class HtmlParse {
    public static final String IMAGE_TAG_SELECTOR = "img";
    public static final String IMAGE_ATTRIBUTE_PATH_SELECTOR = "src";
    public static final String PNG_EXTENSION = ".png";
    public static final String JPG_EXTENSION = ".jpg";
    public static final String lentaSiteName = "lenta.ru";
    public static int imageCouner = 0;

    public static void copyImgFromHtml(String pathToHtml, String copyPath) throws IOException {

        Connection lentaSite = Jsoup.connect(pathToHtml);
        Document doc = lentaSite.maxBodySize(0).get();
        Elements elements = doc.select(IMAGE_TAG_SELECTOR);

        elements.forEach(element -> {
            String src = element.attr(IMAGE_ATTRIBUTE_PATH_SELECTOR);

            if (!src.contains(lentaSiteName)) {
                return;
            }
            URL lentaImg;
            try {
                lentaImg = new URL(src);
                if (src.endsWith(PNG_EXTENSION)) {
                    FileUtils.copyURLToFile(lentaImg, new File(copyPath + File.separator + imageCouner + PNG_EXTENSION));
                } else if (src.endsWith(JPG_EXTENSION)) {
                    FileUtils.copyURLToFile(lentaImg, new File(copyPath + File.separator + imageCouner + JPG_EXTENSION));
                } else {
                    System.out.println("what is this");
                    return;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            imageCouner++;
        });

    }
}

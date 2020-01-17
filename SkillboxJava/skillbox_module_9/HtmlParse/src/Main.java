import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    private static String patternLenta = "((http)s?:\\/\\/)lenta.ru(\\/?\\/)?";

    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        String pathSource;
        String pathDest;
        for (; ; ) {
            System.out.println("Введите путь к веб-странице Ленты");
            pathSource = scanner.nextLine();

            if (!pathSource.matches(patternLenta)) {
                System.out.println("Указанный путь не является путем к веб-странице Ленты");
                continue;
            }
            System.out.println("Введите путь для скачивания картинок с веб-страницы");
            pathDest = scanner.nextLine();
            while (!new File(pathDest).isDirectory()) {
                System.out.println("Указанный путь не является путем к папке");
                pathDest = scanner.nextLine();
            }
            HtmlParse.copyImgFromHtml(pathSource, pathDest);
        }

    }


}

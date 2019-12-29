import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        String pathSource;
        String pathDest;

        for (; ; ) {
            System.out.println("Введите путь к веб-странице");
            pathSource = scanner.nextLine();
            if (!new File(pathSource).isFile()) {
                System.out.println("Указанный путь не является путем к веб-странице");
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

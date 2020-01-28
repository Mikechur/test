package core;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;

public class ParseMoscowMetroTable {
    private final static String MOSCOW_SUBWAY_MAP_TABLE_SELECTOR = ".standard";
    private final static String TABLE_ROW = "tr";
    private final static String MOSCOW_MAP_URL = "https://ru.wikipedia.org/wiki/Список_станций_Московского_метрополитена#Станции_Московского_метрополитена";
    private final static String TABLE_DATA = "td";
    private final static String ANCHOR_TAG = "a";
    private final static String TITLE_ATTR = "title";
    private final static String STYLE_ATTR = "style";
    private final static String SPAN_TAG = "span";
    private final static String COLORLINEKOSINO = "background:#DE64A1";

    public static String lineTrNum;

    public static ParseResult parse() throws IOException {
        ParseResult parseResult = new ParseResult();
        Connection wikiMoscowMap = Jsoup.connect(MOSCOW_MAP_URL);
        Document wikiMoscowMapPage = wikiMoscowMap.maxBodySize(0).get();
        Elements tables = wikiMoscowMapPage.select(MOSCOW_SUBWAY_MAP_TABLE_SELECTOR);
        tables.forEach(table -> {
            table.select(TABLE_ROW).forEach(row -> {
                Elements tds = row.select(TABLE_DATA);
                if (!tds.isEmpty()) {
                    StationInfo stationInfo = new StationInfo();
                    String lineNum = tds.get(0).attr("data-sort-value").trim();
                    lineNum = tds.get(0).attr(STYLE_ATTR).equals(COLORLINEKOSINO) ? "15" : lineNum;
                    lineNum = lineNum.isEmpty() ? tds.get(0).select(SPAN_TAG).get(0).text().trim() : lineNum;
                    String lineName = tds.get(0).select(ANCHOR_TAG).attr(TITLE_ATTR).trim();
                    String stationName = tds.get(1).select(ANCHOR_TAG).attr(TITLE_ATTR).trim().split("\\(")[0];

                    stationInfo.setStationLineNumber(lineNum);
                    stationInfo.setStationName(stationName);
                    stationInfo.setStationLineName(lineName);

                    tds.get(3).select(SPAN_TAG).forEach(transfer -> {
                        if (!transfer.attr(TITLE_ATTR).equals("")) {
                            String transferWhere = transfer.attr(TITLE_ATTR);
                            stationInfo.addConnection(lineTrNum, transferWhere);
                        } else {
                            lineTrNum = transfer.text().trim();
                            // deleting zeros from lines names
                            lineTrNum = lineTrNum.charAt(0) == '0' ? lineTrNum.substring(1) : lineTrNum;
                            // replacing unparseble lines names
                            lineTrNum = lineTrNum.equals("8А") ? "8.5" : lineTrNum;
                            lineTrNum = lineTrNum.equals("11А") ? "11.5" : lineTrNum;
                        }
                    });
                    ParseResult.rows.add(stationInfo);
                }
            });
        });
        return parseResult;
    }

}

import java.util.*;

public class CarNumbers {
    private static ArrayList<String> carNumbers = new ArrayList<>();
    private static TreeSet<String> carNumbersTree = new TreeSet<>();
    private static HashSet<String> carNumbersHash = new HashSet<>();
    private static TreeMap<String,Long> findMin = new TreeMap<>();
    private final static int CAR_AMOUNT = 2000000;
    private final static String BINARY_SEARCH_LIST = "Бинарный поиск в списке";
    private final static String DIRECT_SEARCH_LIST = "Прямой поиск в списке";
    private final static String DIRECT_SEARCH_HASH = "Поиск в HashSet с применением хэш-функции";
    private final static String DIRECT_SEARCH_TREE = "Поиск в TreeSet по бинарному дереву";

    public static void main(String[] args){
        addToArrayList(CAR_AMOUNT);
        Collections.sort(carNumbers);
        System.out.println(carNumbers.get(0));

        System.out.println("Введите номер искомой машины");
        Scanner scanner = new Scanner(System.in);
        String element = scanner.nextLine();

        Long start = System.nanoTime();
        int result = Collections.binarySearch(carNumbers, element);
        Long end = System.nanoTime();

        System.out.println("Метод: " + BINARY_SEARCH_LIST + ", выполнил поиск за " + (end - start) + "нс, " + "Элемент найден: "
                + (result >= 0 ? "Да" : "Нет")
                +"\n ----------" );
        findMin.put(BINARY_SEARCH_LIST, end - start);

        start = System.nanoTime();
        boolean found = carNumbers.contains(element) ;
        end = System.nanoTime();
        System.out.println("Метод: " + DIRECT_SEARCH_LIST + ", выполнил поиск за " + (end - start) + "нс, " + "Элемент найден: "
                + (found ? "Да" : "Нет")
                +"\n ----------" );
        findMin.put(DIRECT_SEARCH_LIST, end - start);

        directlySearch(carNumbersTree, element, DIRECT_SEARCH_HASH);
        directlySearch(carNumbersHash, element, DIRECT_SEARCH_TREE);

        printSearchResults();
        System.out.println(compareElements());
    }

    public static void directlySearch(Set array, String element, String type){
        Long start = System.nanoTime();
        boolean found = array.contains(element);
        Long end = System.nanoTime();
        System.out.println("Метод: " + type + ", выполнил поиск за " + (end - start) + "нс, " + "Элемент найден: "
                + (found ? "Да" : "Нет")
                +"\n ----------" );
        findMin.put(type, end - start);
    }

    public static void addToArrayList(int amount){
        for(int i = 0; i < amount; i++){
            String number = getCarNumber();
            carNumbers.add(number);
            carNumbersTree.add(number);
            carNumbersHash.add(number);
        }
    }
    public static String getRandomLetter(){
        Character randomLetter = (char) Math.round(65 + Math.random() * 25);
        return randomLetter.toString();
    }

    public static String getRandomNum(){
        int randomNum = (int) (Math.ceil(Math.random() * 10) - 1);
        return Integer.toString(randomNum);
    }

    public static String getCarNumber(){
        StringBuilder carNumber = new StringBuilder(getRandomLetter());
        StringBuilder blat = new StringBuilder();

        String serial = getRandomLetter() + getRandomLetter();

        String blatDigit = getRandomNum();

        for(int i = 0; i < 3; i++){
            blat.append(blatDigit);
        }
        String region = getRandomNum() + getRandomNum();

        carNumber.append(blat.toString());
        carNumber.append(serial);
        carNumber.append(region);

//        carNumber = seriya1 + blat + seriya2 + region;

        return carNumber.toString();
    }

    public static Object getKeyFromValue(TreeMap<String, Long> telbook, Long value) {
        for (Object o : telbook.keySet()) {
            if (telbook.get(o).equals(value)) {
                return o;
            }
        }
        return null;
    }

    public static String compareElements(){
        Long min = findMin.get("Бинарный поиск в списке");
        for(Long x: findMin.values()){
            if(x < min) min = x;
        }
        return "Самый быстрый поиск: " + getKeyFromValue(findMin, min) + ", время поиска составило " + min;
    }

    public static void printSearchResults(){
        for(String x: findMin.keySet()){
            System.out.println(x + " --- " + findMin.get(x));
        }
    }

}

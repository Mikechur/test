import java.util.Scanner;

public class Main
{
    private static int minIncome = 200000; // минимальный доход компании за месяц
    private static int maxIncome = 900000; // максимальный доход компании за месяц

    private static int officeRentCharge = 140000; // расход на аренду офиса
    private static int telephonyCharge = 12000; // расход на услуги звонков по телефону
    private static int internetAccessCharge = 7200; // расход на услуги предоставления интернета

    private static int assistantSalary = 45000; // расход на зарплату ассистента
    private static int financeManagerSalary = 90000; // расход на зарплату финансового менеджера

    private static double mainTaxPercent = 0.24; // главный налоговый процент
    private static double managerPercent = 0.15; // процент налога для менеджера

    private static double minInvestmentsAmount = 100000; // минимальная цена инвестирования

    public static void main(String[] args)
    {
        // бесконечный цикл
        while(true)
        {
            double managerSalaryPercent = 1 - managerPercent;
            double mainSalaryPercent = 1 - mainTaxPercent;
            // Задание со *
            double minIncomeSumForInvest = (minInvestmentsAmount/mainSalaryPercent + calculateFixedCharges())/managerSalaryPercent + 1;
            System.out.println("Минимальная сумма дохода для инвестирования " + minIncomeSumForInvest);
            // сообщение о вводе суммы доходов компании за месяц
            System.out.println("Введите сумму доходов компании за месяц " +
                "(от 200 до 900 тысяч рублей): ");

            // программа запрашивает ввод суммы доходов компании за месяц
           int income = (new Scanner(System.in)).nextInt();
            // если сумма не входит в заданные границы 200 000 <= x <= 900 000
            // то цикл возвращается к началу с новой итерации
            if(!checkIncomeRange(income)) {
                continue;
            }
            // расчет зарплаты менеджера
            double managerSalary = income * managerPercent;
            // расчет чистой прибыли компании
            double pureIncome = income - managerSalary -
                calculateFixedCharges();
            // расчет суммы налогов
            double taxAmount = mainTaxPercent * pureIncome;
            // расчет чистой прибыли после налогообложения
            double pureIncomeAfterTax = pureIncome - taxAmount;
            // объявление флага: может ли компания инвестировать
            // не меньше ли чистая прибыль после налогообложения чем минимальная сумма инвестирования

            boolean canMakeInvestments = pureIncomeAfterTax >=
                minInvestmentsAmount;
            // minInvestmentsAmount < pureincomeaftertax

            // вывод зарплаты менеджера
            System.out.println("Зарплата менеджера: " + managerSalary);
            // если taxAmount > 0, вывод строки "Общая сумма налогов: " + taxAmount
            // если taxAmount <= 0, вывод строки "Общая сумма налогов: 0"
            System.out.println("Общая сумма налогов: " +
                (taxAmount > 0 ? taxAmount : 0));

            // если значение canMakeInvestments==true, вывод строки "Компания может инвестировать: да"
            // иначе - вывод строки "Компания может инвестировать: нет"
            System.out.println("Компания может инвестировать: " +
                (canMakeInvestments ? "да" : "нет"));

            // если сумма чистой прибыли отрицательная
            if(pureIncome < 0) {
                // Вывод сообщения об отрицательном бюджете
                System.out.println("Бюджет в минусе! Нужно срочно зарабатывать!");
            }
        }
    }

    // метод проверяет: принадлежит ли сумма доходов за месяц интервалу 200 000 <= x <= 900 000
    // если да - возвращает true, если нет - возвращает false и выводит одну из двух строк
    private static boolean checkIncomeRange(int income) // метод
    {
        if(income < minIncome)
        {
            System.out.println("Доход меньше нижней границы");
            return false;
        }
        if(income > maxIncome)
        {
            System.out.println("Доход выше верхней границы");
            return false;
        }
        return true;
    }
    // метод складывает все фиксированные затраты и возвращает их сумму
    private static int calculateFixedCharges()
    {
        return officeRentCharge +
                telephonyCharge +
                internetAccessCharge +
                assistantSalary +
                financeManagerSalary;
    }
}

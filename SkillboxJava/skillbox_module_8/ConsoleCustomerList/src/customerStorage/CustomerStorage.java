package customerStorage;

import customer.Customer;

import java.util.HashMap;

public class CustomerStorage {
    private HashMap<String, Customer> storage;
    private final static String EMAIL_REGEXP_RUS = "[^\\.@\\s](\\S+[^\\.@\\s]@\\S+.\\S+)";

    public CustomerStorage() {
        storage = new HashMap<>();
    }

    public void addCustomer(String data) {
        String[] components = data.split("\\s+");
        if (components.length != 4) {
            throw new IllegalArgumentException("Wrong format. Correct format: \n " + "add Василий Петров " +
                    "vasily.petrov@gmail.com +79215637722");
        }
        String name = components[0] + " " + components[1];

        if (!components[2].matches(EMAIL_REGEXP_RUS)) {
            throw new IllegalArgumentException("Wrong email-format. Correct format: \n " + "vasily.petrov@gmail.com");
        }
        ;
        String email = components[2];
        String telephone = components[3].replaceAll("[^\\+0-9]", "").replaceAll("^8", "+7");
        if (telephone.length() != 12) {
            throw new IllegalArgumentException("Wrong telephone-format. Correct format: \n " + "+79215637722");
        }

        storage.put(name, new Customer(name, telephone, email));
    }

    public void listCustomers() {
        storage.values().forEach(System.out::println);
    }

    public void removeCustomer(String name) {
        if (!storage.containsKey(name)) {
            throw new IllegalArgumentException("There is no " + name + " in storage. Check names - run command: list");
        }
        storage.remove(name);
    }

    public int getCount() {
        return storage.size();
    }
}
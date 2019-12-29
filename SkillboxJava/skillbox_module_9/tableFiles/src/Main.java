import java.io.IOException;
public class Main {
    public static void main(String[] args) throws IOException {
        TableFiles.csvParse("movementList.csv");
        TableFiles.typesRashods();
    }
}

//	class fakeHashMap<T,V>{
//		ArrayList<T> keys;
//		ArrayList<V> values;

//		public fakeHashMap(){
//
//		}
//
//		public void addElement(T element1, V element2){
//			keys.add(element1);
//			values.add(element2);
//		}
//
//		public ArrayList<T> getKeys(){
//			return keys;
//		}
//
//		public V getElementByKey(T key){
////			return keys.
//		}
//
//	}



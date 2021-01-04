import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import ModalItem from './Components/Modal/ModalItem';
import Order from './Components/Order/Order';
import useOpenItem from './Components/Hooks/useOpenItem';
import useOrders from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: 'AIzaSyADUneUpQcNzlbOX2HhF5GvRVCTLFU1WyY',
  authDomain: 'betweenthebuns-666fd.firebaseapp.com',
  databaseURL:
    'https://betweenthebuns-666fd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'betweenthebuns-666fd',
  storageBucket: 'betweenthebuns-666fd.appspot.com',
  messagingSenderId: '602025752642',
  appId: '1:602025752642:web:cb9e26f36b399e222595db',
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <NavBar />
      <Order {...orders} {...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;

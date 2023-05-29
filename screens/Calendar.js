import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';
import {useState, useEffect} from 'react'
import {db} from '../DB/FireBase'
import { useIsFocused } from '@react-navigation/native';
import { Agenda } from 'react-native-calendars';  
import { Card } from 'react-native-paper';



const CalendarScreen = (props) => {
    const {params} = props.route;
    const id = params? params.id:null;
    const pw = params? params.pw:null;
    const name = params? params.name:null;
    const nickname = params? params.nickname:null;
    const phone = params? params.phone:null; 
    const [items, setItems] = useState({});
    const [selected, setSelected] = useState('');
    const onFocused = useIsFocused();
    const [todo, setTodo] = useState([]);

    useEffect(() => {
      readfromDB();
    }, [onFocused]);  


    const readfromDB = async () => {
      try {
        const data = await db.collection("todos")
        let tempArray = []
        data.get().then(snap => {
          snap.forEach((doc) => {
            tempArray.push({ ...doc.data(), id: doc.id})
          })
          setTodo(tempArray)
        })
      } catch(error) {
        console.log(error.message)
      }
    }


    const loadItems = (day) => {
      const newItems = { ...items };

      const startDate = new Date(day.year, day.month - 1, 1);
      const endDate = new Date(day.year, day.month, 0);

      todo.map((row, idx) => { 
        if (row.ID == id) {
          const rowDate = new Date(row.DATE);

          if (rowDate >= startDate && rowDate <= endDate) {
            if (!newItems[row.DATE]) {
              newItems[row.DATE] = [];
            }

            // 아이템이 중복되지 않도록 체크_conditional
            if (!newItems[row.DATE].some((item) => item.id === idx)) {
              newItems[row.DATE].push({
                id: idx,
                user: row.ID,
                name: row.TODO,
                day: row.DATE,
              });
            }
          }
        }
      });

      setItems(newItems);
    };


    

    const renderItem = (item) => {
        return (
            <TouchableOpacity 
                style={styles.item}
                onPress={() => deleteItem(item.id)}
            >
                <Card style={{backgroundColor: 'white', borderRadius: 10}}>  
                    <Card.Content>
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                refreshControl={null}
                showClosingKnob={true}
                refreshing={false}
                renderItem={renderItem}
                showOnlySelectedDayItems={true}
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                markedDates={{
                  [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'blue'}
                }}
            />
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
});

export default CalendarScreen;
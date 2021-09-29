import React from "react";
import { View, Text, ScrollView } from 'react-native';
import {
    MONTSERRAT_BOLD, 
    MONTSERRAT_SEMIBOLD,
    SCREEN_HEIGHT,
  } from '../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { Button } from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SpecificWordScreen() {
    const insets = useSafeAreaInsets();
   return(
       <>
   <View>
        <View style={styles.container}>
            <Text
                style={{
                    marginTop: insets.top +10,
                    fontFamily: MONTSERRAT_BOLD,
                    fontSize: 36,
                }}
                >
                    Palavra
                </Text>
        </View>
        <ScrollView style={{
            height: SCREEN_HEIGHT,
        }}>
            <Text style={{
                marginTop: insets.top +30, 
                marginLeft: insets.left +26,
                fontFamily: MONTSERRAT_BOLD,
                fontSize: 16,
            }}>
                Significado
            </Text>
            <Text style={{
                marginTop: insets.top +2,
                marginLeft: insets.left +26,
                marginRight: insets.right +26,
                fontFamily: MONTSERRAT_SEMIBOLD,
                fontSize: 14,
                textAlign: 'justify',
            }}>  
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque turpis felis, eget varius risus sollicitudin a. Ut eget sodales dui, ut pellentesque tellus. Praesent consectetur cursus est 
            </Text>
            <Text style={{
                marginTop: insets.top +10,
                marginLeft: insets.left +26,
                fontFamily: MONTSERRAT_BOLD,
                fontSize: 16,
            }}>
                Tradução (Português indígena)
            </Text>
            <Text style={{
                marginTop: insets.top +10,
                marginLeft: insets.left +26,
                fontFamily: MONTSERRAT_SEMIBOLD,
                fontSize: 14,
            }}>
                Milho
            </Text>
            <Text style={{
                marginTop: insets.top +10,
                marginLeft: insets.left +26,
                fontFamily: MONTSERRAT_BOLD,
                fontSize: 16,
            }}>
                Tradução (Português)
            </Text>
            <Text style={{
                marginTop: insets.top +10,
                marginLeft: insets.left +26,
                fontFamily: MONTSERRAT_SEMIBOLD,
                fontSize: 14,
            }}>
                Milho
            </Text>
             <View style={{
                //  width: '50%',
                 justifyContent: 'space-between',
                 flexWrap: 'wrap',
                 marginTop: insets.top +10,
                 flexDirection: 'row',
                 marginHorizontal: 26,
                 marginRight: 8,
             }}>
                 <TouchableOpacity style={styles.buttom1} >
                     <View>
                        <Text style={styles.buttontext}>Voltar</Text>
                     </View>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={styles.buttom2} >
                 <View>
                        <Text style={styles.buttontext2}> Imagens</Text>
                     </View>
                </TouchableOpacity>
                
               
            </View>  
            
        </ScrollView>
    </View>
    </>
   );
}
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/style'
interface Props{
    title:string
}
export const HeaderTitle = ({title}:Props) => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{marginTop:top}} >
            <Text style={styles.headerTitle} >{title}</Text>
        </View>
    )
}

import { View , Text ,TouchableOpacity } from "react-native";
import React , { useState }from "react";
import * as Localization from'expo-localization'
import {I18n} from 'i18n-js'

const translation ={
    en: {
        welcome :  "Hello"
    },
    ar :{
        welcome : "مرحبا"
    }
}
const i18n = new I18n(translation);

i18n.locale = Localization.locale;

i18n.enableFallback = true;


const Translator =()=>{
    const [locale , setLocale] = useState(i18n.locale)

    const changeLocale = (locale)=>{
        i18n.locale = locale
        setLocale(locale)
    }
    return(
        <View>
            <Text >transaltor</Text>
            <Text>{i18n.t('welcome ')}</Text>
            <TouchableOpacity onPress={()=>changeLocale('en')}>
                <Text> English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeLocale('ar')}>
                <Text>عربي</Text>
            </TouchableOpacity>
        </View>
    )
}
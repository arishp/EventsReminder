import React from "react";
import { Text } from "react-native";
import styles from "./style";

interface TitleProps {
    title: string;
}
const Title: React.FC<TitleProps> = (props) => {
    return (
        <Text style={styles.title}>{props.title}</Text>
    )
}

export default Title;

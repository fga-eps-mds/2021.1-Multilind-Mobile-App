import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import buttonStyle from './styles';

const getCombinedStyles = (outlined) => {
  if (outlined) {
    return {
      button: buttonStyle.buttonOutlined,
      text: buttonStyle.textOutlined,
    };
  }

  return {
    button: buttonStyle.button,
    text: buttonStyle.text,
  };
};

export function Button({
  children,
  outlined,
  icon: Icon,
  style,
  textStyle,
  ...props
}) {
  const buttonCombinedStyles = getCombinedStyles(outlined);

  const renderIcon = () => {
    if (Icon) {
      return <View style={buttonStyle.icon}>{Icon}</View>;
    }
    return null;
  };
  return (
    <TouchableOpacity style={[buttonCombinedStyles.button, style]} {...props}>
      {renderIcon()}
      <Text style={[buttonCombinedStyles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './styles';

const getCombinedStyles = (outlined, hasIcon, focused) => ({
  icon: styles.icon,
  container: styles.container,
  input: StyleSheet.flatten([
    styles.input,
    outlined && styles.inputOutlined,
    outlined && focused && styles.inputOutlinedSelected,
    hasIcon && styles.inputWithIcon,
  ]),
});

export function Input({
  icon: Icon,
  outlined,
  inputStyle,
  inputContainerStyle,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const combinedStyles = getCombinedStyles(outlined, !!Icon, focused);

  const renderIcon = () => {
    if (Icon) {
      return <View style={combinedStyles.icon}>{Icon}</View>;
    }
    return null;
  };

  return (
    <View style={[combinedStyles.container, inputContainerStyle]}>
      {renderIcon()}

      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Pesquisar um local"
        style={[combinedStyles.input, inputStyle]}
        {...props}
      />
    </View>
  );
}

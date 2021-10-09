import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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
  onChange,
  ...props
}) {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);
  const combinedStyles = getCombinedStyles(outlined, !!Icon, focused);
  const textInput = useRef();

  const updateSearch = (value) => {
    setSearch(value);
    onChange(value);
  };

  const renderIcon = () => {
    if (Icon) {
      return <View style={combinedStyles.icon}>{Icon}</View>;
    }
    return null;
  };

  return (
    <View style={[combinedStyles.container, inputContainerStyle]}>
      {renderIcon()}
      <View style={styles.clearContainer}>
        <TextInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Pesquisar um local"
          onChangeText={updateSearch}
          ref={textInput}
          style={[combinedStyles.input, inputStyle]}
          {...props}
        />
        {search ? (
          <TouchableOpacity
            onPress={() => {
              textInput.current.clear();
              updateSearch('');
            }}
            style={{
              justifyContent: 'center',
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {AppText} from '../../../../core/app/component/text';
import {AppTextButton} from '../../../../core/app/component/textbutton';
import headerStyle from '../style/style';
import {APP_NAME} from '../../../../core/app/constant/applicationconstant';
const AppHeader = ({title = APP_NAME}) => {
  const styles = headerStyle();
  return (
    <View style={styles.main}>
      <View style={styles.row}>
        <AppTextButton
          textstyle={styles.headerbutton}
          text="Cancel"
          onPress={() => console.log('ckik')}
          buttonstyle={styles.headerbutton}
        />
        <AppText style={styles.headertitle} text={title ?? ''} />
        <AppTextButton
          textstyle={styles.headerbutton}
          text="Done"
          onPress={() => console.log('ckik')}
          buttonstyle={styles.headerbutton}
        />
      </View>
    </View>
  );
};
AppHeader.propTypes = {
  title: PropTypes.string,
};
export default AppHeader;

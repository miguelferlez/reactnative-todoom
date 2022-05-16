import * as Color from './Colors';
import * as Typography from './Typography';

export const onboardingTouchableLeft = {
    ...Typography.body,
    marginLeft: '15%',
}
export const onboardingTouchableRight = {
    ...Typography.body,
    marginRight: '15%',
}
export const centered = {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
}
export const beginning = {
    ...centered,
    alignSelf: 'flex-start',
    justifyContent: 'center',
}
export const container = {
    backgroundColor: Color.white,
    width: '100%',
    height: '100%',
    padding: 22,
}
export const containerDarkMode = {
    ...container,
    backgroundColor: Color.blackRaisin,
}
export const paragraph = {
    marginBottom: 20,
}
export const paragraphTask = {
    ...paragraph,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}
export const linkIcon = {
    flexDirection: 'row',
    justifyContent: 'center',
}
export const linkText = {
    marginLeft: 10,
}
export const normalField = {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
}
export const button = {
    backgroundColor: Color.blackRaisin,
    padding: 10,
    borderRadius: 20,
}
export const buttonDarkMode = {
    ...button,
    backgroundColor: Color.white,
}
export const buttonDisabled = {
    ...button,
    backgroundColor:Color.greyLight,
}
export const buttonDisabledDarkMode = {
    ...button,
    backgroundColor:Color.greyScript,
}
export const addButton = {
    backgroundColor: Color.blackRaisin,
    width: 50,
    height: 50,
    borderRadius: 50,
}
export const addButtonDarkMode = {
    ...addButton,
    backgroundColor: Color.white,
}
export const taskTextInput = {
    ...Typography.body,
    textAlignVertical: 'center',
    padding: 0,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: Color.greyLight,
    marginLeft: 8,
}
export const taskTextInputDarkMode = {
    ...taskTextInput,
    ...Typography.bodyDarkMode,
    borderBottomColor: Color.greyScript,

}

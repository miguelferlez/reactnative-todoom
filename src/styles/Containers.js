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
    flex: 1,
    alignItems: 'center',
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
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 20,
}


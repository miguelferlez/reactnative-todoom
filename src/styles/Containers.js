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


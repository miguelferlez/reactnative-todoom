import * as Color from './Colors';

export const headerTitleFontSize = 32;
export const headerListFontSize = 48;
export const bodyFontSize = 18;
export const bodyInfoFontSize = 16;

export const headerList = {
    color: Color.blackRaisin,
    fontSize: headerListFontSize,
    fontFamily: 'VeniceClassic',
}
export const headerListDarkMode = {
    ...headerList,
    color: Color.white,
}
export const headerOnboarding = {
    color: Color.blackRaisin,
    fontSize: headerTitleFontSize,
    fontFamily: 'VeniceClassic',
}
export const headerTitle = {
    color: Color.blackRaisin,
    fontSize: headerTitleFontSize,
    fontFamily: 'VeniceClassic',
}
export const headerTitleDarkMode = {
    ...headerTitle,
    color: Color.white,
}
export const body = {
    color: Color.blackRaisin,
    fontSize: bodyFontSize,
    fontFamily: 'ZillaSlab-Medium',
}
export const subBody = {
    ...body,
    color: Color.greyLight,
}
export const bodyDarkMode = {
    ...body,
    color: Color.white,
}
export const subBodyDarkMode = {
    ...body,
    color: Color.greyScript,
}
export const bodyInfo = {
    textAlign: 'justify',
    color: Color.blackRaisin,
    fontSize: bodyInfoFontSize,
    fontFamily: 'ZillaSlab-Medium',
}
export const bodyInfoDarkMode = {
    ...bodyInfo,
    color: Color.white,
}
export const bodyInfoBold = {
    color: Color.blackRaisin,
    fontSize: bodyInfoFontSize,
    fontFamily: 'ZillaSlab-Bold',
}
export const bodyInfoBoldDarkMode = {
    ...bodyInfoBold,
    color: Color.white,
}
export const bodyInfoItalic = {
    fontFamily: 'ZillaSlab-Italic',
}
export const error = {
    color: Color.roseFiery,
    fontSize: bodyFontSize,
    fontFamily: 'ZillaSlab-Bold',
}
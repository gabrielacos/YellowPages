/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace Web_App.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Web_App');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}
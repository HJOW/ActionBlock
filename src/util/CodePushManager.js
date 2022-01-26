import React, { Component } from 'react';
import codePush from 'react-native-code-push';

class CodePushManagerClass {
    apply(component) {
        return codePush(component);
    }
}

const CodePushManager = new CodePushManagerClass();
export default CodePushManager;
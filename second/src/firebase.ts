// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, getDocs, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import { firebaseConfig } from './env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase


// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore(app);


// 필요한 곳에서 사용할 수 있도록 내보내기
const firebase = { collection, db, doc, getDocs, getDoc, addDoc, deleteDoc };
export default firebase;
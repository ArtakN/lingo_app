import styles from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider, db } from "../../firebase";
import { signInWithPopup, getAdditionalUserInfo } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { doc, setDoc } from "firebase/firestore";

function Login() {

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const currentUser = useSelector(state => state.user.currentUser)

   const handleGoogleLogIn = () => {

      signInWithPopup(auth, provider)
         .then((result) => {

            localStorage.setItem('user', JSON.stringify(result.user))

            dispatch(setUser())

            const isNewUser = getAdditionalUserInfo(result).isNewUser
            const user = result.user

            if (isNewUser) {
               try {
                  // Add "vocabualry" collection for a new user
                  setDoc(doc(db, "vocabulary", user.uid), {
                     learnedWords: [],
                     wordsToRepeat: []
                  });
                  // Add "lessonSettings" collection for a new user
                  setDoc(doc(db, "lessonSettings", user.uid), {
                     wordsCount: 10,
                     modules: {
                        All: false,
                        A11: false,
                        A12: false,
                        A21: false,
                        A22: false,
                        B11: false,
                        B12: false,
                        B21: false,
                        B22: false
                     },
                     exerciseTypes: {
                        choose: true,
                        listen: false,
                        write: false,
                        speak: false
                     }
                  });
                  // Add "userProfile" collection for a new user
                  setDoc(doc(db, "userProfile", user.uid), {
                     id: user.uid,
                     email: user.email,
                     displayName: user.displayName,
                     photoUrl: user.photoURL
                  });
               } catch (error) {
                  console.log(error)
               }

            }

         }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.

            // const email = error.customData.email;

            // The AuthCredential type that was used.
            // const credential = provider.credentialFromError(error);
            // ...
         });
   }



   return !currentUser ? (
      <div className={styles.login}>
         <div className={styles.container}>
            <p className={styles.title}>Log In</p>
            <div className={styles.btnBlock}>
               <button className={styles.loginBtn} onClick={handleGoogleLogIn}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none">
                  <path d="M1.27066 6.80381C2.03043 5.22761 3.10391 3.8954 4.45679 2.78767C6.29004 1.27978 8.39288 0.372127 10.7506 0.0939736C13.5201 -0.232979 16.1229 0.289169 18.5297 1.72385C19.1277 2.08009 19.6865 2.48512 20.2208 2.92431C20.3531 3.03166 20.3384 3.0951 20.2257 3.20246C19.1326 4.28579 18.0395 5.36913 16.9562 6.46222C16.8288 6.5891 16.7602 6.57934 16.6229 6.47686C13.4466 4.0418 8.81443 4.70058 6.44689 7.92131C6.03025 8.48737 5.69203 9.09736 5.45674 9.76102C5.43714 9.81958 5.39792 9.87326 5.36851 9.93182C4.73619 9.45359 4.09896 8.97536 3.47154 8.49225C2.73628 7.93107 2.00102 7.36988 1.27066 6.80381Z" fill="#E94335" />
                  <path d="M5.36851 14.5091C5.57929 14.9727 5.75575 15.4558 6.02044 15.8902C7.13314 17.7055 8.7213 18.8718 10.8143 19.2866C12.7015 19.6623 14.5152 19.4085 16.2063 18.4667C16.2651 18.4375 16.3239 18.4082 16.3778 18.3789C16.4072 18.4082 16.4317 18.4423 16.4611 18.4667C17.7258 19.4427 18.9953 20.4187 20.26 21.3947C19.6522 21.9949 18.961 22.478 18.2258 22.8977C16.0935 24.1079 13.7848 24.5959 11.3535 24.4104C8.32426 24.1762 5.71163 22.9855 3.55487 20.8384C2.60883 19.8965 1.82946 18.8327 1.26576 17.6176C1.79024 17.2175 2.31473 16.8222 2.83922 16.4221C3.68232 15.7828 4.52541 15.1484 5.36851 14.5091Z" fill="#34A853" />
                  <path d="M20.2649 21.3947C19.0002 20.4187 17.7307 19.4427 16.466 18.4667C16.4366 18.4423 16.4072 18.4082 16.3827 18.3789C16.819 18.0422 17.265 17.7152 17.6229 17.2858C18.2209 16.5733 18.6179 15.7682 18.8238 14.8654C18.8483 14.7531 18.8287 14.7141 18.7159 14.719C18.6571 14.7239 18.6032 14.719 18.5444 14.719C16.5445 14.719 14.5397 14.7141 12.5398 14.7239C12.3192 14.7239 12.2702 14.6653 12.2751 14.4555C12.2849 13.0403 12.2849 11.6251 12.2751 10.21C12.2751 10.0294 12.3241 9.98062 12.5054 9.98062C16.1719 9.9855 19.8384 9.9855 23.5098 9.98062C23.6667 9.98062 23.7304 10.0197 23.7696 10.1856C24.0686 11.5275 24.049 12.8744 23.8677 14.231C23.7206 15.3143 23.4559 16.3635 23.0491 17.3785C22.4462 18.8766 21.5589 20.1845 20.3923 21.3068C20.3482 21.341 20.3041 21.3654 20.2649 21.3947Z" fill="#4285F3" />
                  <path d="M5.36851 14.5091C4.52541 15.1484 3.68232 15.7828 2.83922 16.4221C2.31473 16.8173 1.79024 17.2175 1.26576 17.6176C0.858915 16.8661 0.594221 16.0707 0.378545 15.2509C-0.0332014 13.6649 -0.096924 12.0546 0.128556 10.4393C0.305018 9.17056 0.672649 7.95058 1.26576 6.80869C2.00102 7.36988 2.73138 7.93595 3.46664 8.49713C4.09896 8.98024 4.73129 9.45847 5.36361 9.9367C5.25577 10.4588 5.10382 10.9712 5.0548 11.508C4.96657 12.484 5.0597 13.4356 5.3391 14.3725C5.35871 14.4116 5.36361 14.4603 5.36851 14.5091Z" fill="#FABB06" />
               </svg>Continue with Google</button>
               <button className={styles.loginBtn}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 20" fill="none">
                  <path d="M12.9893 0H12.8471C11.7826 0.140517 10.6717 0.771967 10.0657 1.48158C9.41229 2.24301 8.87305 3.21872 8.9679 4.60897C10.3898 4.7205 11.2689 3.98542 11.9109 3.22751C12.5651 2.46432 13.1035 1.41044 12.9893 0Z" fill="black" />
                  <path d="M17.1529 14.7201V14.6805C15.7618 14.0201 14.6482 12.8995 14.4936 10.9841C14.3197 8.87542 15.3376 7.64063 16.6251 6.82124C15.9577 5.7779 14.8774 5.10166 13.3555 4.87156C12.1863 4.69561 11.2776 5.02794 10.3737 5.35852C10.2985 5.38601 10.2234 5.41348 10.1481 5.44065C10.0668 5.47034 9.98568 5.50303 9.90475 5.53566C9.65285 5.63721 9.4026 5.73809 9.15135 5.7454C8.76742 5.7571 8.36678 5.5866 8.01236 5.43576C7.91439 5.39407 7.81995 5.35388 7.73037 5.31946C7.29389 5.15435 6.79593 4.98749 6.30851 4.91196C5.1712 4.73807 4.14981 5.12712 3.40683 5.58381C1.99902 6.44272 0.939871 8.21499 0.847656 10.3948V11.2897C1.06546 14.3354 2.23614 16.7154 3.75109 18.5579C4.26486 19.1815 4.97008 19.8735 5.84392 20H6.24967C6.7582 19.9283 7.18014 19.7655 7.59819 19.6043C8.15839 19.3881 8.71163 19.1747 9.45697 19.1868C10.069 19.1972 10.5739 19.3935 11.0746 19.5882C11.5805 19.7848 12.082 19.9798 12.6854 19.9798C14.0068 19.9798 14.7753 18.916 15.3936 18.0602C15.4254 18.0162 15.4568 17.9727 15.4878 17.93C16.1834 16.9675 16.7533 15.9303 17.1529 14.7201Z" fill="black" />
               </svg>Continue width Apple</button>
            </div>
         </div>
      </div>
   ) : (
      navigate("/lesson/parameters")
   )

}

export default Login

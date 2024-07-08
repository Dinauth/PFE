step 
1 install android studio
2 put this in your .bashrc file
    export ANDROID_HOME=$HOME/Android/Sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools

3 ./script/deploy.sh

if not working automatically then

get emulator list emulator -list-avds
run your emulator  @name_of_your_emulator ex: emulator @Pixel_3a_API_34

 ./script/deploy.sh




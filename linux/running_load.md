#/bin/sh
# /home/ubuntu/jmeter/JMX/comp1
# project path

eval `ssh-agent -s`
ssh-add ~/automationLoad/qaload
OUTPUT="nxglog"
mkdir $OUTPUT
echo "ShellAutomata v3.0"

REPORTFILE=report.log

# Log capture mechanism
ShellID=0
#start capture
log_startCapture () {
logfile=$1 #get the argument
echo "got log file name $logfile"
ssh -t sapan.kumar@domain 'tail -f access.log' > $OUTPUT/$logfile &
ShellID=$!
echo "start log capture $ShellID "
}   
#end capture
log_endCapture () {
kill -9 $ShellID
echo "end log capture $ShellID "
}


#================================================================================
#Runner Scripts
echo "Starting case 1: AddProcess Thread 1"
./input/restore_file.sh
log_startCapture add_process_th_1.csv
jmeter -n -t 1_ADDOrder.jmx -q input/configs/add_process_th_1.prop -l output/add_process_th_1.csv 
echo "Case 1: Finished"
log_endCapture

echo -e "\nStarting case 1: AddProcess Thread 1\n" >> $REPORTFILE
cat $OUTPUT/add_process_th_1.csv  | grep 'process' | awk 'BEGIN { ORS=" " }; {sum+=$12} END {print "Count: ",NR;print "Avg :",sum/NR}' >> $REPORTFILE

sleep 1m

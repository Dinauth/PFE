FROM maibornwolff/dd-import:latest

#COPY reports/report.json .

COPY report.xml .

#COPY gitleaks_report.json .

ENTRYPOINT ["dd-reimport-findings.sh"]


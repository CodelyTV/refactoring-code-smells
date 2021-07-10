list_refactorings:
	ls -1 refactorings/* | grep -v "refactorings/" | awk NF | sort -u

list_code_smells:
	ls -1 code-smells/* | grep -v "code-smells/" | awk NF | sort -u

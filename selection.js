selectAnswer = (index) => {
    const tempAnswers = this.state.answers;
    const oldSelectedAnswerIndex = tempAnswers.findIndex(
      (answer) => answer.isSelected
    );

    const selectionLimit = this.state.limit;
    const count = tempAnswers.filter((answer) => answer.isSelected).length;

    if (tempAnswers[index].isSelected) {
      tempAnswers[index].isSelected = false;

      this.setState({
        answers: tempAnswers,
      });
      return;
    }

    if (selectionLimit == 1) {
      if (oldSelectedAnswerIndex === -1) {
        tempAnswers[index].isSelected = true;
        this.setState({ answers: tempAnswers });
        return;
      }
      tempAnswers[oldSelectedAnswerIndex].isSelected = false;
      tempAnswers[index].isSelected = true;
      this.setState({ answers: tempAnswers });
    }

    if (count < this.state.limit) {
      tempAnswers[index].isSelected = true;
      this.setState({
        answers: tempAnswers,
      });
    }
  };

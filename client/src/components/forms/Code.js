const Code = () => {
    return (
        <form>
            <label>
                <input className="form-control" type="text" name="code" placeholder="todo" />
            </label>
            <br />
            <input className="btn custom-submit" type="submit" value="Submit" />
        </form>
    )
}

export default Code;